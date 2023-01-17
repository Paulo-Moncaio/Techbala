import Modal from "react-modal";
import closeImg from "../../assets/Vector.svg";
import { Dropdown, ModalStyled, SubMenu, Ul } from "./style";
import logoImg from "../../assets/logotechbala.svg";
import setaImg from "../../assets/seta.svg";
import { useContext, useRef, useState } from "react";
import { BuscaContext } from "../../context/BuscaContext";
import { api } from "../../services/api";
import { useNavigate } from "react-router";

interface MenuModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function MenuModal({ isOpen, onRequestClose }: MenuModalProps) {
  const { setSearchProduto, setSearchCategoria, setSearchOrder } = useContext(BuscaContext);
  const [isHardwareOpen, setIsHardwareOpen] = useState(false);
  const [isPerifericoOpen, setIsPerifericoOpen] = useState(false);
  const [openHard, setOpenHard] = useState(false)
  const [openPeri, setOpenPeri] = useState(false)
  const navigate = useNavigate();

  const subMenuHardwareRef = useRef<HTMLDivElement>(null);
  const subMenuPerifericosRef = useRef<HTMLDivElement>(null);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="menu-modal-overlay"
      className="menu-modal-content"
      closeTimeoutMS={500}
      ariaHideApp={false}
    >
      <Ul isHardwareOpen={isHardwareOpen}
        isPerifericoOpen={isPerifericoOpen}
      >
        <button
          type="button"
          onClick={() => { onRequestClose(); setIsHardwareOpen(false); setIsPerifericoOpen(false) }}
          className="react-modal-close"
        >
          <img src={closeImg} alt="sair" />
        </button>
        <img className="logo" src={logoImg} alt="logo" onClick={()=> {navigate('/'); onRequestClose(); setSearchOrder(""); setSearchProduto("");
              setSearchCategoria("");}}/>

        <li>
          <Dropdown
            isSubMenuOpen={isHardwareOpen}
            onClick={() => { setIsHardwareOpen(!isHardwareOpen); setOpenHard(true); }}
          >
            <a>HARDWARE</a>
            <img className="seta" src={setaImg} alt="seta" />
          </Dropdown>
          <SubMenu isSubMenuOpen={isHardwareOpen} openHard={openHard} openPeri={openPeri} element={subMenuHardwareRef.current}>
            <li
              onClick={() => {
                navigate('/');
                setSearchCategoria("processador");
                setIsHardwareOpen(!isHardwareOpen);
                onRequestClose();
              }}
            >
              <a>processador</a>
            </li>
            <li
              onClick={() => {
                navigate('/');
                setSearchCategoria("memoria");
                setIsHardwareOpen(!isHardwareOpen);
                onRequestClose();
              }}
            >
              <a>Memoria Ram</a>
            </li>
            <li
              onClick={() => {
                navigate('/');
                setSearchCategoria("armazenamento");
                setIsHardwareOpen(!isHardwareOpen);
                onRequestClose();
              }}
            >
              <a>Armazenamento</a>
            </li>
            <li
              onClick={() => {
                navigate('/');
                setSearchCategoria("gabinete");
                setIsHardwareOpen(!isHardwareOpen);
                onRequestClose();
              }}
            >
              <a>Gabinete</a>
            </li>
            <li
              onClick={() => {
                navigate('/');
                setSearchCategoria("cooler");
                setIsHardwareOpen(!isHardwareOpen);
                onRequestClose();
              }}
            >
              <a>Cooler</a>
            </li>
            <li
              onClick={() => {
                navigate('/');
                setSearchCategoria("fontes");
                setIsHardwareOpen(!isHardwareOpen);
                onRequestClose();
              }}
            >
              <a>Fontes</a>
            </li>
            <li
              onClick={() => {
                navigate('/');
                setSearchCategoria("placa mae");
                setIsHardwareOpen(!isHardwareOpen);
                onRequestClose();
              }}
            >
              <a>Placa Mae</a>
            </li>
          </SubMenu>
        </li>
        <li>
          <Dropdown
            isSubMenuOpen={isPerifericoOpen}
            onClick={() => { setIsPerifericoOpen(!isPerifericoOpen); setOpenPeri(true); }}
          >
            <a>PERIFERICOS</a>
            <img className="seta" src={setaImg} alt="seta" />
          </Dropdown>
          <SubMenu isSubMenuOpen={isPerifericoOpen} openPeri={openPeri} openHard={openHard} element={subMenuPerifericosRef.current}>
            <li
              onClick={() => {
                setSearchCategoria("headset");
                setIsPerifericoOpen(!isPerifericoOpen);
                onRequestClose();
              }}
            >
              <a>Headset</a>
            </li>
            <li
              onClick={() => {
                setSearchCategoria("mouse");
                setIsPerifericoOpen(!isPerifericoOpen);
                onRequestClose();
              }}
            >
              <a>Mouse</a>
            </li>
            <li
              onClick={() => {
                setSearchCategoria("teclado");
                setIsPerifericoOpen(!isPerifericoOpen);
                onRequestClose();
              }}
            >
              <a>Teclado</a>
            </li>
          </SubMenu>
        </li>
        <li
          onClick={() => {
            setSearchCategoria("monitor");
            onRequestClose();
          }}
        >
          <Dropdown isSubMenuOpen={isHardwareOpen}>
            <a>MONITORES</a>
          </Dropdown>
        </li>
        <li
          onClick={() => {
            setSearchCategoria("computador");
            onRequestClose();
          }}
        >
          <Dropdown isSubMenuOpen={isHardwareOpen}>
            <a className="sozinho">COMPUTADORES</a>
          </Dropdown>
        </li>
      </Ul>
      <ModalStyled />
    </Modal>
  );
}
