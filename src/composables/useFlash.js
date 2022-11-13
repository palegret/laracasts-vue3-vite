import swal from "sweetalert";

export function useFlash() {
  function flash(title, message, level = "info") {
    return swal(title, message, level);
  }

  return { flash };
}
