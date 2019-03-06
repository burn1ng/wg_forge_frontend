import OrdersTable from './orders/OrdersTable';

export default class Core {
    static init() {
        return OrdersTable.render();
    }
}