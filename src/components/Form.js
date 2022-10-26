import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" data-testid="name-input" id="name" />
        </label>
        <label htmlFor="textarea">
          Description:
          <textarea
            type="textarea"
            id="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="atrr1">
          atribute 1:
          <input type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="atrr2">
          Atribute 2:
          <input type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="atrr3">
          Atribute 3:
          <input type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Image:
          <input type="text" data-testid="image-input" id="image" />
        </label>
        <label htmlFor="rareSelect">
          <select data-testid="rare-input" id="rareSelect">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" id="trunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
