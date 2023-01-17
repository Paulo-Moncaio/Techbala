import { Container } from "./styles";
import { useModals } from "../../hooks/useModals";
import checkImg from "../../assets/CheckIcon.svg";
import { ModalStyled } from "../PedidoModal/styles";
import Modal from "react-modal";
import { useContext } from "react";
import { BuscaContext } from "../../context/BuscaContext";
import { useNavigate } from "react-router";

interface PedidoModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function PedidoModal({ isOpen, onRequestClose }: PedidoModalProps) {
  const { setSearchOrder } = useContext(BuscaContext);
  const navigate = useNavigate();
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content-pedido"
        closeTimeoutMS={500}
        ariaHideApp={false}
      >
          <div className="img">

        <img src={checkImg} alt="check" />
          </div>
          <div className="h2">

        <h2>Compra Finalizada !</h2>
          </div>
        <p>Obrigado por comprar com a gente<br/>
            Tenha bom proveito, e volte sempre
        </p>
        <button onClick={()=> {onRequestClose(); navigate("/")}}> Ok </button>
      </Modal>
      <ModalStyled />
    </>
  );
}
