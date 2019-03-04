import React from "react"
// import RecipeCard from '../components/RecipeCard/RecipeCard'
import GridLayout from '../components/GridLayout';
import Grid from '@material-ui/core/Grid';
import IngredientCard from "../components/IngredientCard";
// import IngredientData from "../data/ingredients.json";
import DairyData from "../data/dairy.json";
import FruitData from "../data/fruit.json";
import GrainData from "../data/grain.json";
import ProteinData from "../data/protein.json";
import VeggieData from "../data/veggie.json";


class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <GridLayout>
              {VeggieData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
                  </Grid>
              ))}
          </GridLayout>
          <GridLayout>
              {FruitData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
                  </Grid>
              ))}
          </GridLayout>
          <GridLayout>
            {GrainData.map((card) => (
              <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                  <IngredientCard data={card}>
                  </IngredientCard>
              </Grid>
            ))}
          </GridLayout>
          <GridLayout>
            {ProteinData.map((card) => (
              <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                  <IngredientCard data={card}>
                  </IngredientCard>
              </Grid>
            ))}
          </GridLayout>
          <GridLayout>
              {DairyData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
                  </Grid>
              ))}
          </GridLayout>
        </div>
        <h3>In Stock</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

handleChange(e) {
  this.setState({ text: e.target.value });
}

handleClick(data) {
  console.log("Grid")
}

handleSubmit(e) {
  e.preventDefault();
  if (!this.state.text.length) {
    return;
  }
  const newItem = {
    text: this.state.text,
    id: Date.now()
  };
  this.setState(state => ({
    items: state.items.concat(newItem),
    text: ''
  }));
}
}

class TodoList extends React.Component {
render() {
  return (
    <ul>
      {this.props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
}

export default IndexPage;

