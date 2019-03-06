import table_template from './table_template.html';
import orders from '../../../data/orders';
import OrdersTableRow from './OrdersTableRow';

export default class OrdersTable {
    static async render() {
        let data = await Promise.resolve(orders); // will be request to API un future
        let table_rows_html = '';

        for (let i = 0; i < data.length; i++) {
            table_rows_html += new OrdersTableRow({data: data[i]}).get_row_html();
        }

        document.getElementById("app").innerHTML = table_template({table_rows_html})
    }
}