import { Router } from "express";
import AgendamentosController from "./controllers/AgendamentosController";
import AutenticacaoController from "./controllers/AutenticacaoController";
import BebidasController from "./controllers/BebidasController";
import ComidasController from "./controllers/ComidasController";
import EventosController from "./controllers/EventosController";
import FornecedoresController from "./controllers/FornecedoresController";
import FuncionariosController from "./controllers/FuncionariosController";
import UsuariosController from "./controllers/UsuariosController";
import { validacaoAdmin, validacaoGeral } from "./middlewares/validaToken";

const router = Router();
const usuariosController = new UsuariosController()
const funcionariosController = new FuncionariosController()
const comidasController = new ComidasController()
const bebidasController = new BebidasController()
const fornecedoresController = new FornecedoresController()
const eventosController = new EventosController()
const agendamentosController = new AgendamentosController()
const autenticacaoController = new AutenticacaoController()

//rotas model Usuarios
router.get("/usuarios", usuariosController.getAll)
router.get("/usuarios/:id", usuariosController.getById)
router.post("/usuarios", usuariosController.post)
router.put("/usuarios/:id", usuariosController.put)
router.put("/usuarios/isadmin/:id", usuariosController.putAdmin)
router.delete("/usuarios/:id", usuariosController.delete)

//rotas model Funcionarios
router.get("/funcionarios", funcionariosController.getAll)
router.get("/funcionarios/:id", funcionariosController.getById)
router.post("/funcionarios", funcionariosController.post)
router.put("/funcionarios/:id", funcionariosController.put)
router.delete("/funcionarios/:id", funcionariosController.delete)

//rotas model Comidas
router.get("/comidas", comidasController.getAll)
router.get("/comidas/:id", comidasController.getById)
router.post("/comidas", comidasController.post)
router.put("/comidas/:id", comidasController.put)
router.delete("/comidas/:id", comidasController.delete)

//rotas model Bebidas
router.get("/bebidas", bebidasController.getAll)
router.get("/bebidas/:id", bebidasController.getById)
router.post("/bebidas", bebidasController.post)
router.put("/bebidas/:id", bebidasController.put)
router.delete("/bebidas/:id", bebidasController.delete)

//rotas model fornecedores
router.get("/fornecedores", fornecedoresController.getAll)
router.get("/fornecedores/:id", fornecedoresController.getById)
router.post("/fornecedores", fornecedoresController.post)
router.put("/fornecedores/:id", fornecedoresController.put)
router.delete("/fornecedores/:id", fornecedoresController.delete)

//rotas model eventos
router.get("/eventos", eventosController.getAll)
router.get("/eventos/:id", eventosController.getById)
router.post("/eventos", eventosController.post)
router.put("/eventos/:id", eventosController.put)
router.delete("/eventos/:id", eventosController.delete)

//rotas agendamento
router.post("/agendamentos", agendamentosController.post)
router.get("/agendamentos", agendamentosController.getAll)
router.get("/agendamentos/usuario/:id", agendamentosController.getByIdUsuario)
router.get("/agendamentos/evento/:id", agendamentosController.getByIdEvento)
router.get("/agendamentos/data", agendamentosController.getByDayEvento)
router.get("/agendamentos/hora", agendamentosController.getByHour)
router.put("/agendamentos/:id", agendamentosController.put)
router.delete("/agendamentos/:id", agendamentosController.delete)

//rotas autenticacao
router.post("/login", autenticacaoController.post)

export { router };