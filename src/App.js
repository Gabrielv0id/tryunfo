import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    cardsSaved: [],
    hasTrunfo: false,
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.valideButton();
      },
    );
  };

  handleTrunfo = () => {
    const { cardsSaved } = this.state;
    const getTrunfo = cardsSaved.some((card) => card.cardTrunfo === true);
    this.setState(
      {
        hasTrunfo: getTrunfo,
      },
    );
  };

  valideButton = () => {
    const maxValue = 90;
    const totalValue = 210;

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const isValid = cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || cardAttr1 < 0
      || cardAttr2 < 0
      || cardAttr3 < 0
      || cardAttr1 > maxValue
      || cardAttr2 > maxValue
      || cardAttr3 > maxValue
      || Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > totalValue;

    this.setState(
      {
        isSaveButtonDisabled: isValid,
      },
    );
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((oldState) => ({
      cardsSaved: [...oldState.cardsSaved, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), this.handleTrunfo);
  };

  onRemoveButtonClick = (event) => {
    const { cardsSaved } = this.state;
    const { name } = event.target;
    console.log(name);
    this.setState({
      cardsSaved: cardsSaved.filter((card) => card.cardName !== name),
    }, this.handleTrunfo);
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      cardsSaved,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <ul>
          { cardsSaved.map((card) => (
            <>
              <Card
                key={ card.cardName }
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                onClick={ this.onRemoveButtonClick }
                name={ card.cardName }
                type="button"
                data-testid="delete-button"
              >
                Remove
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
