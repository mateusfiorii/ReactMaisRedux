import React from 'react'
import IconButton from '../template/iconButton'

export default ({ list, handleRemove, handleMarkAsDone, handleMarkingAsPending }) => {

    const renderRows = () => {
        const lists = list || []

        return lists.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style="success"
                        icon="check"
                        onClick={() => handleMarkAsDone(todo)}
                        hide={todo.done}
                    />
                    <IconButton
                        style="warning"
                        icon="undo"
                        onClick={() => handleMarkingAsPending(todo)}
                        hide={!todo.done}
                    />
                    <IconButton
                        style="danger"
                        icon="trash-o"
                        onClick={() => handleRemove(todo)}
                        hide={!todo.done}
                    />
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}