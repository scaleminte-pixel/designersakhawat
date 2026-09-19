"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Project {
  id: number; title: string; slug: string; status: string; featured: number;
  service_name: string | null; cover_thumb: string | null; cover_media_id: number | null;
  video_url?: string | null;
  display_order: number; updated_at: string;
}

const STATUS_COLORS: Record<string, string> = { published: "badge-success", draft: "badge-warning", trashed: "badge-danger" };

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", slug: "" });

  function showToast(msg: string) { setToast(msg); setTimeout(() => setToast(null), 3000); }

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    const url = filter ? `/api/admin/projects?status=${filter}` : "/api/admin/projects";
    const res = await fetch(url);
    const data = await res.json();
    setProjects(data.projects || []);
    setLoading(false);
  }, [filter]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  function generateSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  async function createProject() {
    if (!newProject.title) { showToast("Title required."); return; }
    const res = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newProject.title, slug: newProject.slug || generateSlug(newProject.title), status: "draft" }),
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = `/admin/projects/${data.id}`;
    } else {
      showToast(data.error || "Failed to create.");
    }
  }

  async function deletePermanently(id: number, title: string) {
    if (!confirm(`Are you sure you want to permanently delete "${title}"? This cannot be undone.`)) {
      return;
    }
    const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      showToast(`Permanently deleted "${title}".`);
      fetchProjects();
    } else {
      showToast(data.error || "Failed to delete.");
    }
  }

  async function emptyTrash() {
    if (!confirm(`Are you sure you want to permanently delete ALL ${projects.length} projects in the trash? This cannot be undone.`)) {
      return;
    }
    const res = await fetch("/api/admin/projects?action=empty_trash", { method: "DELETE" });
    const data = await res.json();
    if (data.success) {
      showToast(`Emptied trash (${data.deletedCount} projects removed).`);
      fetchProjects();
    } else {
      showToast(data.error || "Failed to empty trash.");
    }
  }

  async function changeStatus(id: number, action: "publish" | "unpublish" | "trash" | "restore") {
    if (action === "trash" && !confirm("Are you sure you want to move this project to trash?")) {
      return;
    }
    await fetch(`/api/admin/projects/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, status: "published" }),
    });
    fetchProjects();
    if (action === "restore") {
      showToast("Project restored and published to portfolio!");
    } else {
      showToast(`Project ${action === "publish" ? "published" : action === "unpublish" ? "unpublished" : "moved to trash"}.`);
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-xl)" }}>
        <div>
          <h2 style={{ marginBottom: 4 }}>Projects</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>{projects.length} projects</p>
        </div>
        <button onClick={() => setCreating(!creating)} className="btn btn-primary btn-sm">
          {creating ? "✕ Cancel" : "+ New Project"}
        </button>
      </div>

      {/* Quick create */}
      {creating && (
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--accent-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", marginBottom: "var(--space-xl)", display: "flex", gap: "var(--space-md)", alignItems: "flex-end" }}>
          <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
            <label className="form-label" htmlFor="new-title">Project Title</label>
            <input id="new-title" className="form-input" placeholder="My New Project" value={newProject.title}
              onChange={(e) => { const t = e.target.value; setNewProject((p) => ({ ...p, title: t, slug: generateSlug(t) })); }} />
          </div>
          <div className="form-group" style={{ marginBottom: 0, flex: 1 }}>
            <label className="form-label" htmlFor="new-slug">Slug</label>
            <input id="new-slug" className="form-input" placeholder="my-new-project" value={newProject.slug}
              onChange={(e) => setNewProject((p) => ({ ...p, slug: e.target.value }))} />
          </div>
          <button onClick={createProject} className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>Create & Edit →</button>
        </div>
      )}

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: "var(--space-xs)", marginBottom: "var(--space-lg)", alignItems: "center" }}>
        {["", "published", "draft", "trashed"].map((s) => (
          <button key={s} onClick={() => setFilter(s)}
            className={`btn btn-sm ${filter === s ? "btn-primary" : "btn-outline"}`}>
            {s === "" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
        {filter === "trashed" && projects.length > 0 && (
          <button onClick={emptyTrash} className="btn btn-sm btn-danger" style={{ marginLeft: "auto" }}>
            🗑️ Empty Trash ({projects.length})
          </button>
        )}
      </div>

      {/* Table */}
      {loading ? (
        <div style={{ color: "var(--text-muted)" }}>Loading...</div>
      ) : projects.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">📁</div>
          <h3 className="empty-state-title">No Projects{filter ? ` (${filter})` : ""}</h3>
          <p className="empty-state-desc">{filter === "trashed" ? "The trash is empty." : "Create your first project."}</p>
        </div>
      ) : (
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Project</th>
                <th>Service</th>
                <th>Status</th>
                <th>Featured</th>
                <th>Updated</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj) => (
                <tr key={proj.id}>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                      {proj.cover_media_id ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={`/api/media/${proj.cover_media_id}?size=thumb`} alt="" style={{ width: 48, height: 36, objectFit: "cover", borderRadius: "var(--radius-sm)" }} />
                      ) : (
                        <div style={{ width: 48, height: 36, background: "var(--bg-elevated)", borderRadius: "var(--radius-sm)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>📁</div>
                      )}
                      <div>
                        <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "var(--text-sm)" }}>{proj.title}</div>
                        <code style={{ fontSize: 10, color: "var(--text-muted)" }}>/{proj.slug}</code>
                      </div>
                    </div>
                  </td>
                  <td><span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{proj.service_name || "—"}</span></td>
                  <td><span className={`badge ${STATUS_COLORS[proj.status] || "badge-muted"}`}>{proj.status}</span></td>
                  <td>{proj.featured ? <span style={{ color: "var(--accent)" }}>⭐</span> : <span style={{ color: "var(--text-muted)" }}>—</span>}</td>
                  <td><span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{new Date(proj.updated_at).toLocaleDateString()}</span></td>
                  <td>
                    <div style={{ display: "flex", gap: 4 }}>
                      <Link href={`/admin/projects/${proj.id}`} className="btn btn-ghost btn-sm">Edit</Link>
                      {proj.status !== "trashed" && (
                        <>
                          <a href={`/portfolio/${proj.slug}`} target="_blank" rel="noopener" className="btn btn-ghost btn-sm">↗</a>
                          {proj.status === "draft" ? (
                            <button onClick={() => changeStatus(proj.id, "publish")} className="btn btn-ghost btn-sm" style={{ color: "var(--success)" }}>Publish</button>
                          ) : (
                            <button onClick={() => changeStatus(proj.id, "unpublish")} className="btn btn-ghost btn-sm" style={{ color: "var(--warning)" }}>Unpublish</button>
                          )}
                          <button onClick={() => changeStatus(proj.id, "trash")} className="btn btn-ghost btn-sm btn-danger">Trash</button>
                        </>
                      )}
                      {proj.status === "trashed" && (
                        <>
                          <button onClick={() => changeStatus(proj.id, "restore")} className="btn btn-ghost btn-sm" style={{ color: "var(--success)" }}>
                            ↺ Restore
                          </button>
                          <button onClick={() => deletePermanently(proj.id, proj.title)} className="btn btn-ghost btn-sm btn-danger" style={{ color: "var(--danger)" }}>
                            🗑️ Delete Permanently
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {toast && <div className="toast-container"><div className="toast toast-success">{toast}</div></div>}
    </div>
  );
}
