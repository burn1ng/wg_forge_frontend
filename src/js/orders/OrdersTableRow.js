import table_row_template from './table_row_template.html';
import './orders-table-row.scss';

const CARD_NUMBER_ESCAPE = '*';

export default class OrdersTableRow {
    /**
     *
     * @param options
     * @param {OrderData} options.data
     */
    constructor(options) {
        this._data = options.data;
    }

    get_row_html() {
        return table_row_template({
            order: this._get_formatted_order()
        });
    }

    _get_formatted_order() {
        return Object.assign({}, this._data, {
            created_at: this._format_date(),
            card_number: this._format_card_number()
        });
    }

    _format_date() {
        let date = new Date();
        date.setTime(parseInt(this._data.created_at, 10));

        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
        ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }

    _format_card_number() {
        let escaped = this._data.card_number;

        return `${escaped.slice(0, 2)}${CARD_NUMBER_ESCAPE.repeat(escaped.length - 6)}${escaped.slice(-4)}`;
    }
}