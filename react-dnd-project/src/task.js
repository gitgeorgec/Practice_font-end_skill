import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({task, index}) => {
	const isDragDisabled = task.id === 'task-1';

	return (
		<Draggable
			draggableId={task.id}
			index={index}
			isDragDisabled={isDragDisabled}
		>
			{(provided, snapshot) =>(
				<div
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div
						style={{
							border: '1px solid lightgrey',
							borderRadius: '2px',
							padding: '8px',
							marginBottom: '8px',
							background: snapshot.isDragging ? 'green': 'white',
							display: 'flex'
						}}
					>
						<div
							{...provided.dragHandleProps}
							style={{
								width: '20px',
								height: '20px',
								backgroundColor: 'orange',
								borderRadius: '4px',
								marginRight: '8px'
							}}
						>

						</div>
						{task.content}
					</div>
				</div>
			)}
		</Draggable>
	)
}

export default Task;
