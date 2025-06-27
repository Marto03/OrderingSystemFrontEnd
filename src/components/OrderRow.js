import { formatDate } from '../utils/FormatUtils';

export function OrderRow({ order, editedAmount, onAmountChange, onUpdate, onDelete, changed, valid }) {
    const displayValue =
        editedAmount !== undefined && editedAmount !== ''
            ? editedAmount
            : order.totalAmount.toFixed(2);

    return (
        <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.customerName}</td>
            <td>
                <input
                    value={displayValue}
                    onChange={e => onAmountChange(e.target.value)}
                    onFocus={e => e.target.select()} // маркира всичко при фокус
                    style={{
                        width: 100,
                        marginRight: 8,
                        padding: '4px',
                        fontSize: '14px',
                        borderRadius: '4px',
                        border: '1px solid #ccc'
                    }}
                />
                <span style={{ marginLeft: 4 }}>лв</span>
            </td>
            <td>{formatDate(order.createdAt)}</td>
            <td>
                <button
                    onClick={onUpdate}
                    disabled={!changed || !valid}
                    style={{
                        background: changed && valid ? '#1976d2' : '#ccc',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: 4,
                        cursor: changed && valid ? 'pointer' : 'not-allowed',
                        marginRight: 8
                    }}
                >
                    Обнови
                </button>
                <button onClick={onDelete} style={{ color: 'Red' }}>Изтрий</button>
            </td>
        </tr>
    );
}