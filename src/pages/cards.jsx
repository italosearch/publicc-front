import React, { useEffect, useMemo, useState } from 'react';
import styles from '../styles/pages/cards.module.css';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import Asset1 from '../assets/Sem títulodfdf.png';
import Image from 'next/image';

function Cards() {
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
      className: `${styles.card3}`,
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(cards);
  }, []);

  function dragState() {
    !isDragging ? setIsDragging(true) : setIsDragging(false);
  }
  function onDragEnd(id) {
    dragState();
    items.splice(id, 1);
    if (items.length === 0) {
      const newArray = [...cards];

      setItems(newArray);
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.cardsContainer}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <>
              <div className={styles.cardContainer}>
                <>
                  {items.slice(0, 1).map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          key={item.id}
                          id={item.id}
                          className={item.className}
                          onDrag={dragState}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        />
                      )}
                    </Draggable>
                  ))}
                </>
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
