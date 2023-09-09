import { BtnR } from './elements';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function DialogConfirm({openDialog,setOpenDialog,handleConfirm}) {

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleConfirmDialog = () =>{
    handleConfirm()
    setOpenDialog(false)
  }

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Confirmacion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estas seguro de que deseas realizar esta acción?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <BtnR onClick={handleClose} color="primary">
            Cancelar
          </BtnR>
          <BtnR onClick={handleConfirmDialog} color="primary">
            Confirmar
          </BtnR>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogConfirm;