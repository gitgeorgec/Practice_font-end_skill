import React from 'react';
import Task from './task'
import { Droppable, Draggable, } from 'react-beautiful-dnd';

const Column = ({ column, tasks, index}) => {
	return (
		<Draggable
			draggableId={column.id}
			index={index}
		>
			{provided => (
				<div
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div
						style={{
							margin: '8px',
							border: '1px solid lightgrey',
							borderRadius: '2px',
							flex: 1,
							display: 'flex',
							flexDirection: 'column',
							minWidth: 200,
							background: 'white'
						}}
					>
						<h3
							{...provided.dragHandleProps}
							style={{
								padding: '8px',

							}}
						>
							{column.title}
						</h3>
						<Droppable
							droppableId={column.id}
						>
							{(provider, snapshot) => (
								<div
									style={{
										padding: '8px',
										flexGrow: 1,
										minHeight: '100px',
										background: snapshot.isDraggingOver ? 'lightblue' : 'white',
									}}
									ref={provider.innerRef}
									{...provider.droppableProps}
								>
									{tasks.map((task, index) => (
										<Task
											key={task.id}
											task={task}
											index={index}
										/>
									))}
									{provider.placeholder}
								</div>
							)}
						</Droppable>
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default Column;
