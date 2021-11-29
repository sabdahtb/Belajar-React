import React, { useEffect } from "react";
import Swal from "sweetalert2";

export const About = () => {
  useEffect(() => {
    Swal.fire({
      position: "center",
      icon: "info",
      title: "Coming Soon",
      showConfirmButton: false,
      timer: 1500,
    });
  });

  return (
    <div className="components">
      <h2 className="judul">Halaman About</h2>
    </div>
  );
};
