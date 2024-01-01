import ScrollSuave from './modules/scroll-suave.js';
import AnimacaoScroll from './modules/scroll-animacao.js';
import NavegacaoTab from './modules/navegacao-tab.js';
import Accordion from './modules/accordion.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import MenuDropdown from './modules/menu-dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import iniciaFuncionamento from './modules/horario-funcionamento.js';
import criaAnimais from './modules/busca-animais.js';
import buscaBitcoin from './modules/busca-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.iniciaClasse();

const animacaoScroll = new AnimacaoScroll('[data-anime="scroll"]', 'ativo');
animacaoScroll.iniciaClasse();

const navegacaoTab = new NavegacaoTab('[data-tab="menu"]  li', '[data-tab="conteudo"] section');
navegacaoTab.iniciaClasse();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.iniciaClasse();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.iniciaClasse();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.iniciaClasse();

const menuDropdown = new MenuDropdown('[data-dropdown]', 'ativo');
menuDropdown.iniciaClasse();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', 'ativo');
menuMobile.iniciaClasse();

criaAnimais('./animais.json', '.numeros-grid');

iniciaFuncionamento();
buscaBitcoin('https://www.blockchain.com/pt/ticker', '.btc-preco');
