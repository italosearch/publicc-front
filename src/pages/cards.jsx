import React, { useEffect, useState } from 'react';
import styles from '../styles/pages/cards.module.css';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import Asset1 from '../assets/Sem títulodfdf.png';
import Image from 'next/image';

const cards = [
  {
    id: 0,
    className: `${styles.card}`,
  },
  {
    id: 1,
    className: `${styles.card2}`,
  },
  {
    id: 2,
    className: `${styles.card2}`,
  },
];
function Cards() {
  const [isDragging, setIsDragging] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => setItems(cards), []);
  function dragState() {
    !isDragging ? setIsDragging(true) : setIsDragging(false);
  }
  return (
    <DragDropContext onDragEnd={dragState}>
      <div className={styles.cardsContainer}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <>
              <div className={styles.cardContainer}>
                <Draggable draggableId={'draggable'} index={1}>
                  {
                    (provided) => (
                      <div
                        onDrag={dragState}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={styles.card}
                      ></div>
                    )
                    // {
                    //   cards.map((item) => (
                    //     <div
                    //       key={item.id}
                    //       id={item.id}
                    //       style={item.className}
                    //       onDrag={dragState}
                    //       {...provided.draggableProps}
                    //       {...provided.dragHandleProps}
                    //       ref={provided.innerRef}
                    //     ></div>
                    //   ));
                    // }
                  }
                </Draggable>
              </div>
              <div className={styles.dropzoneContainer}>
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.dropzone}
                >
                  <div>
                    {isDragging && (
                      <h1 className={styles.blur}>
                        PRIMEIRA AÇÃO DE CHAMAR .FICA EM MODO BLUR ASSIM QUE
                        SOLTAR
                      </h1>
                    )}
                  </div>
                  <Image src={Asset1} alt="asset" width={1000} height={100} />

                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  {/* {provided.placeholder} */}
                </div>
              </div>
            </>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
export default Cards;
