import React, { useState, } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext, Droppable, } from 'react-beautiful-dnd';
import { initialData, } from './initialData';
import Column from './column';

const App = () => {
	const [ data, setData, ] = useState(initialData);

	const _handleDargStart = () => {
		// document.body.style.color = 'orange'
		// document.body.style.transition = '0.2s'
	}
	const _handleDargUpdate = update => {
		// const { destination } = update;
		// const opacity = destination ? destination.index / Object.keys(data.tasks).length: 0;

		// document.body.style.background = `rgba(153, 141, 217, ${opacity})`
	}

	const _handleDargEnd = result => {
		// document.body.style.color = 'inherit'
		// document.body.style.background = 'inherit'
		const { destination, source, draggableId, type } = result;

		if (!destination) { return; }

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}


		if(type === 'column') {
			const newColumnOrder = Array.from(data.columnsOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0 , draggableId)

			const newData = {
				...data,
				columnsOrder: newColumnOrder
			};

			setData(newData)
			return
		}


		const start = data.columns[source.droppableId]
		const finish = data.columns[destination.droppableId]

		if (start === finish) {
			const newTaskIds = Array.from(start.taskIds)
			newTaskIds.splice(source.index, 1)
			newTaskIds.splice(destination.index, 0, draggableId)

			const newColumn = { ...start, taskIds: newTaskIds }
			const newData = { ...data,
				columns: {
					...data.columns,
					[newColumn.id]: newColumn,
				}
			}

			setData(newData)
		} else {
			const startTaskIds = Array.from(start.taskIds);
			startTaskIds.splice(source.index, 1)
			const newStart = { ...start, taskIds: startTaskIds }

			const finishTaskIds = Array.from(finish.taskIds);
			finishTaskIds.splice(destination.index, 0, draggableId);
			const newFinish = {
				...finish,
				taskIds: finishTaskIds,
			}

			console.log(newStart, newFinish)
			const newData = {
				...data,
				columns: {
					...data.columns,
					[newStart.id]: newStart,
					[newFinish.id]: newFinish,
				}
			}

			setData(newData)
		}
	}

	console.log(data)
	return (
		<div >
			<DragDropContext
				onDragEnd={_handleDargEnd}
				onDragUpdate={_handleDargUpdate}
				onDragStart={_handleDargStart}
			>
				<Droppable
					droppableId="all-columns"
					direction="horizontal"
					type="column"
				>
					{provided => (
						<div
							{...provided.droppableProps}
							ref={provided.innerRef}
							style={{
								display: 'flex',
							}}
						>
							{data.columnsOrder.map((columnID, index) => {
								const column = data.columns[columnID];
								const tasks = column.taskIds.map(taskId => data.tasks[taskId])

								return (
									<Column
										key={column.id}
										column={column}
										tasks={tasks}
										index={index}
									/>
								);
							})}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));
