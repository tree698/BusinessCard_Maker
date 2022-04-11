import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import style from './editor.module.css';

const Editor = ({ cards }) => (
  <section className={style.editor}>
    <h1 className={style.title}>Card Maker</h1>
    {cards.map((card) => (
      <CardEditForm card={card} />
    ))}
  </section>
);

export default Editor;
