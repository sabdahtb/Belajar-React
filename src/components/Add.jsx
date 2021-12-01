import React from "react";

export default function Add({ judul, isi, handleJudul, handleIsi, handleAdd }) {
  return (
    <div className="components">
      <h2 className="formTambah">Tambah Blog</h2>

      <form className="formTambah" onSubmit={handleAdd}>
        <label>Judul</label>
        <input type="text" name="judul" value={judul} onChange={handleJudul} />
        <label>Isi</label>
        <textarea
          name="isi"
          cols="30"
          rows="10"
          value={isi}
          onChange={handleIsi}
        />
        <button>Tambah</button>
      </form>
    </div>
  );
}
