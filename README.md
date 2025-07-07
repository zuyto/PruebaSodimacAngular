
# 🌐 Frontend Angular - Gestión Pedidos Sodimac

Frontend SPA basado en Angular + Angular Material, que consume las APIs de pedidos y cobertura.

---

## 🚀 Tecnologías

- Angular 16+
- Angular Material
- RxJS / HttpClient
- Responsive Design
- `mat-table`, `ReactiveForms`

---

## 📦 Módulos

### Pedidos
- Listar pedidos por cliente
- Registrar nuevos pedidos
- Cambiar estado de pedido

### Cobertura
- Consultar cobertura por zona, ciudad o departamento
- Gestión dinámica de SKUs por búsqueda

---

## 🔧 Instalación

```bash
cd src/GestionPedidosAngular
npm install
ng serve --open
```

---

## 🔗 API que consume

| Endpoint                                 | Método | Descripción                    |
|------------------------------------------|--------|--------------------------------|
| /api/Pedidos/RegistrarPedidos            | POST   | Registra pedidos               |
| /api/Pedidos/GetPedidosPorCliente        | POST   | Lista pedidos por cliente      |
| /api/Pedidos/CambiarEstadoPedido         | PUT    | Cambia estado del pedido       |
| /api/Cobertura/ObtenerCoberturaPorZona   | POST   | Consulta cobertura por zona    |
| /api/Cobertura/ObtenerCoberturaPorCiudad | POST   | Consulta cobertura por ciudad  |
| /api/Cobertura/ObtenerCoberturaPorDepto  | POST   | Consulta cobertura por depto   |

---

## 📋 Pendientes

- Login con JWT
- Seguridad de acceso a módulos
- Reportes descargables
- Mejora visual responsive
