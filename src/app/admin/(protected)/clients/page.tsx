"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface ClientLogoItem {
  id: number;
  name: string;
  media_id: number | null;
  storage_path: string | null;
  thumb_path: string | null;
  website_url: string | null;
  display_order: number;
  visible: number;
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<ClientLogoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [mediaId, setMediaId] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  const fetchClients = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/clients");
      const data = await res.json();
      setClients(data.clients || []);
    } catch {
      showToast("Failed to load client logos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/admin/media", { method: "POST", body: fd });
      const data = await res.json();
      if (data.id) {
        setMediaId(data.id);
        showToast("Logo image uploaded.");
      } else {
        showToast(data.error || "Upload failed.");
      }
    } catch {
      showToast("Upload failed.");
    } finally {
      setUploading(false);
    }
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      showToast("Client name is required.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          media_id: mediaId,
          website_url: websiteUrl.trim() || null,
          display_order: clients.length + 1,
          visible: 1,
        }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("Client logo added.");
        setName("");
        setWebsiteUrl("");
        setMediaId(null);
        setShowAdd(false);
        fetchClients();
      } else {
        showToast(data.error || "Failed to add.");
      }
    } catch {
      showToast("Network error.");
    } finally {
      setSaving(false);
    }
  }

  async function toggleVisible(client: ClientLogoItem) {
    try {
      await fetch("/api/admin/clients", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: client.id,
          name: client.name,
          media_id: client.media_id,
          website_url: client.website_url,
          display_order: client.display_order,
          visible: client.visible ? 0 : 1,
        }),
      });
      fetchClients();
      showToast(`Logo ${client.visible ? "hidden" : "visible"}.`);
    } catch {
      showToast("Failed to update status.");
    }
  }

  async function deleteClient(id: number, clientName: string) {
    if (!confirm(`Are you sure you want to delete client logo "${clientName}"?`)) {
      return;
    }
    try {
      const res = await fetch("/api/admin/clients", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("Client logo deleted.");
        fetchClients();
      } else {
        showToast(data.error || "Delete failed.");
      }
    } catch {
      showToast("Delete failed.");
    }
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-xl)" }}>
        <div>
          <h2 style={{ marginBottom: 4 }}>Client Logos</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>
            Manage client brands and company logos displayed in the homepage trusted marquee.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAdd(!showAdd)}
          className="btn btn-primary btn-sm"
        >
          {showAdd ? "✕ Cancel" : "+ Add Client Logo"}
        </button>
      </div>

      {showAdd && (
        <form
          onSubmit={handleAdd}
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--accent-border)",
            borderRadius: "var(--radius-lg)",
            padding: "var(--space-xl)",
            marginBottom: "var(--space-xl)",
          }}
        >
          <h3 style={{ marginBottom: "var(--space-lg)", fontSize: "var(--text-lg)" }}>New Client Brand</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md)", marginBottom: "var(--space-md)" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label required">Brand / Client Name</label>
              <input
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. AURA TECHNOLOGIES"
                required
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Website URL (Optional)</label>
              <input
                className="form-input"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://clientwebsite.com"
              />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: "var(--space-lg)" }}>
            <label className="form-label">Logo Image / Vector</label>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <input
                  type="file"
                  ref={fileRef}
                  onChange={handleUpload}
                  accept="image/*,.svg"
                  style={{ display: "none" }}
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  disabled={uploading}
                  className="btn btn-outline btn-sm"
                >
                  {uploading ? "Uploading..." : mediaId ? "Change Logo Image" : "Upload Logo Image"}
                </button>
                {mediaId && (
                  <span style={{ color: "var(--accent)", fontSize: "var(--text-sm)", fontWeight: 600 }}>
                    ✓ Media ID #{mediaId} attached
                  </span>
                )}
              </div>
              {/* Size Hint */}
              <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <span style={{ fontSize: "0.7rem", background: "rgba(212,255,0,0.08)", border: "1px solid rgba(212,255,0,0.2)", color: "var(--accent)", padding: "2px 8px", borderRadius: 99, fontWeight: 700, fontFamily: "monospace" }}>
                  ✓ 400 × 200 px
                </span>
                <span style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>
                  Wide 2:1 · PNG transparent background · SVG-ও চলবে · Homepage marquee strip-এ দেখায়
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "var(--space-sm)" }}>
            <button type="submit" disabled={saving} className="btn btn-primary btn-sm">
              {saving ? "Saving..." : "Save Client Logo"}
            </button>
            <button type="button" onClick={() => setShowAdd(false)} className="btn btn-ghost btn-sm">
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div style={{ color: "var(--text-muted)" }}>Loading client logos...</div>
      ) : clients.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🏢</div>
          <h3 className="empty-state-title">No Client Logos Added</h3>
          <p className="empty-state-desc">The homepage is currently using default SVG partner emblems. Add real client logos above.</p>
        </div>
      ) : (
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Logo</th>
                <th>Brand Name</th>
                <th>Website</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((c) => (
                <tr key={c.id}>
                  <td style={{ width: 80 }}>
                    {c.media_id ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/api/media/${c.media_id}?size=thumb`}
                        alt={c.name}
                        style={{ width: 60, height: 32, objectFit: "contain", background: "rgba(255,255,255,0.05)", borderRadius: 4, padding: 2 }}
                      />
                    ) : (
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>Vector SVG</span>
                    )}
                  </td>
                  <td>
                    <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "var(--text-sm)" }}>
                      {c.name}
                    </span>
                  </td>
                  <td>
                    {c.website_url ? (
                      <a href={c.website_url} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", fontSize: "var(--text-xs)" }}>
                        {c.website_url} ↗
                      </a>
                    ) : (
                      <span style={{ color: "var(--text-muted)", fontSize: "var(--text-xs)" }}>—</span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => toggleVisible(c)}
                      className={`badge ${c.visible ? "badge-success" : "badge-muted"}`}
                      style={{ border: "none", cursor: "pointer" }}
                    >
                      {c.visible ? "Visible" : "Hidden"}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteClient(c.id, c.name)}
                      className="btn btn-ghost btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {toast && (
        <div className="toast-container">
          <div className="toast toast-success">{toast}</div>
        </div>
      )}
    </div>
  );
}
