import ScrollSuave from './modules/scroll-suave.js';
import iniciaAnimacaoScroll from './modules/scroll-animacao.js';
import NavegacaoTab from './modules/navegacao-tab.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import iniciaTooltip from './modules/tooltip.js';
import iniciaMenuDropdown from './modules/menu-dropdown.js';
import iniciaMenuMobile from './modules/menu-mobile.js';
import iniciaFuncionamento from './modules/horario-funcionamento.js';
import iniciaBuscaAnimais from './modules/busca-animais.js';
import iniciaBuscaBitcoin from './modules/busca-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.iniciaClasse();

iniciaAnimacaoScroll();

const navegacaoTab = new NavegacaoTab('[data-tab="menu"]  li', '[data-tab="conteudo"] section');
navegacaoTab.iniciaClasse();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.iniciaClasse();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.iniciaClasse();

iniciaTooltip();
iniciaMenuDropdown();
iniciaMenuMobile();
iniciaBuscaAnimais();
iniciaFuncionamento();
iniciaBuscaBitcoin();
