import Swal from "sweetalert2";

export const toast: any = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
  customClass: { container: 'toast' },
});
