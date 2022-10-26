import React, { Component } from 'react';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome:
          <input type="text" data-testid="name-input" id="name" value={ cardName } />
        </label>
        <label htmlFor="textarea">
          Description:
          <textarea
            type="textarea"
            id="textarea"
            data-testid="description-input"
            value={ cardDescription }
          />
        </label>
        <label htmlFor="atrr1">
          atribute 1:
          <input type="number" data-testid="attr1-input" value={ cardAttr1 } />
        </label>
        <label htmlFor="atrr2">
          Atribute 2:
          <input type="number" data-testid="attr2-input" value={ cardAttr2 } />
        </label>
        <label htmlFor="atrr3">
          Atribute 3:
          <input type="number" data-testid="attr3-input" value={ cardAttr3 } />
        </label>
        <label htmlFor="image">
          Image:
          <input
            type="text"
            data-testid="image-input"
            id="image"
            value={ cardImage }
            onChange={ onInputChange() }
          />
        </label>
        <label htmlFor="rareSelect">
          <select
            data-testid="rare-input"
            id="rareSelect"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            type="checkbox"
            id="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
