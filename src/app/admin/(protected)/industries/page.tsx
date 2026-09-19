"use client";

import { useState, useEffect, useCallback } from "react";

interface IndustryItem {
  id: number;
  name: string;
  icon: string | null;
  display_order: number;
  visible: number;
}

export default function AdminIndustriesPage() {
  const [industries, setIndustries] = useState<IndustryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("🌐");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  const fetchIndustries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/industries");
      const data = await res.json();
      setIndustries(data.industries || []);
    } catch {
      showToast("Failed to load industries.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchIndustries();
  }, [fetchIndustries]);

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      showToast("Industry name is required.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/industries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          icon: icon.trim() || "🌐",
          display_order: industries.length + 1,
          visible: 1,
        }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("Industry added.");
        setName("");
        setIcon("🌐");
        setShowAdd(false);
        fetchIndustries();
      } else {
        showToast(data.error || "Failed to add.");
      }
    } catch {
      showToast("Network error.");
    } finally {
      setSaving(false);
    }
  }

  async function toggleVisible(item: IndustryItem) {
    try {
      await fetch("/api/admin/industries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          name: item.name,
          icon: item.icon,
          display_order: item.display_order,
          visible: item.visible ? 0 : 1,
        }),
      });
      fetchIndustries();
      showToast(`Industry ${item.visible ? "hidden" : "visible"}.`);
    } catch {
      showToast("Failed to update status.");
    }
  }

  async function deleteIndustry(id: number, industryName: string) {
    if (!confirm(`Are you sure you want to delete industry "${industryName}"?`)) {
      return;
    }
    try {
      const res = await fetch("/api/admin/industries", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        showToast("Industry deleted.");
        fetchIndustries();
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
          <h2 style={{ marginBottom: 4 }}>Industries Served</h2>
          <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>
            Industries you cater to (Fintech, Healthcare, E-Commerce, SaaS, Luxury, etc.).
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAdd(!showAdd)}
          className="btn btn-primary btn-sm"
        >
          {showAdd ? "✕ Cancel" : "+ Add Industry"}
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
          <h3 style={{ marginBottom: "var(--space-lg)", fontSize: "var(--text-lg)" }}>New Industry</h3>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "var(--space-md)", marginBottom: "var(--space-lg)" }}>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Icon</label>
              <input
                className="form-input"
                value={icon}
                onChange={(e) => setIcon(e.target.value)}
                placeholder="🌐"
                style={{ textAlign: "center", fontSize: 18 }}
              />
            </div>
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label required">Industry Name</label>
              <input
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. AI & Cloud SaaS"
                required
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "var(--space-sm)" }}>
            <button type="submit" disabled={saving} className="btn btn-primary btn-sm">
              {saving ? "Saving..." : "Save Industry"}
            </button>
            <button type="button" onClick={() => setShowAdd(false)} className="btn btn-ghost btn-sm">
              Cancel
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <div style={{ color: "var(--text-muted)" }}>Loading industries...</div>
      ) : industries.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">🌐</div>
          <h3 className="empty-state-title">No Industries Added</h3>
          <p className="empty-state-desc">Add target industries you specialize in.</p>
        </div>
      ) : (
        <div style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Icon</th>
                <th>Industry Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {industries.map((ind) => (
                <tr key={ind.id}>
                  <td style={{ fontSize: 20 }}>{ind.icon || "🌐"}</td>
                  <td>
                    <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "var(--text-sm)" }}>
                      {ind.name}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => toggleVisible(ind)}
                      className={`badge ${ind.visible ? "badge-success" : "badge-muted"}`}
                      style={{ border: "none", cursor: "pointer" }}
                    >
                      {ind.visible ? "Visible" : "Hidden"}
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => deleteIndustry(ind.id, ind.name)}
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
