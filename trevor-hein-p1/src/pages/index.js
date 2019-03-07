import React from "react"
// import RecipeCard from '../components/RecipeCard/RecipeCard'
import GridLayout from '../components/GridLayout';
import Grid from '@material-ui/core/Grid';
import IngredientCard from "../components/IngredientCard";
// import IngredientData from "../data/ingredients.json";
import RecipeData from "../data/recipes.json";
import DairyData from "../data/dairy.json";
import FruitData from "../data/fruit.json";
import GrainData from "../data/grain.json";
import ProteinData from "../data/protein.json";
import VeggieData from "../data/veggie.json";
import { Box, Flex, Text } from 'rebass';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [], 
      text: '',
      veggieValue: 0,
      fruitValue: 0,
      grainValue: 0,
      proteinValue: 0,
      dairyValue: 0,
      bgColor: "",
      // selectedOption: "unchecked"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  addIngredient({card}) {
    this.setState(prevState => {
      if (card.type === "veggie") {
        return (
          { veggieValue: prevState.fruitValue + 1 }
        )
      } else if (card.type === "fruit") {
        return (
          { fruitValue: prevState.fruitValue + 1 }
        )
      } else if (card.type === "grain") {
        return (
          { grainValue: prevState.grainValue + 1 }
        )
      } else if (card.type === "protein") {
        return (
          { proteinValue: prevState.proteinValue + 1 }
        )
      } else if (card.type === "dairy") {
        return (
          { dairyValue: prevState.dairyValue + 1 }
        )
      }
    });
  }

  // addVeggie() {
  //   this.setState(prevState => {
  //     return (
  //       { fruitValue: prevState.veggieValue + 1 }
  //     )
  //   });
  // }

  // addFruit() {
  //   this.setState(prevState => {
  //     return (
  //       { fruitValue: prevState.fruitValue + 1 }
  //     )
  //   });
  // }

  // addGrain() {
  //   this.setState(prevState => {
  //     return (
  //       { fruitValue: prevState.grainValue + 1 }
  //     )
  //   });
  // }

  // addProtein() {
  //   this.setState(prevState => {
  //     return (
  //       { fruitValue: prevState.grainValue + 1 }
  //     )
  //   });
  // }

  addVeggieToList({card}) {
    console.log(card.name);
  }

  addVeggieTypeToList({card}) {
    console.log(card.type);
  }

  handleIngredientClick = (event, {card}) => {
    this.addVeggieToList({card});
    this.addVeggieTypeToList({card});
    this.addIngredient({card})
  }

  render() {

    return (
      <div>
        <div>
          <Flex>
            <Box
              width={1}
              bg="#004d40"
            >
              <Text
                p={3}
                fontSize={[ 3, 4, 5 ]}
                fontWeight='bold'
                fontFamily='roboto'
                color='white'>
                Veggies: { this.state.veggieValue }
              </Text>
            </Box>
          </Flex>
          <GridLayout>
              {VeggieData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
                      <input type='button' onClick={
                        this.handleIngredientClick.bind(this, 'add', {card})
                      } value='Have It!' />
                  </Grid>
              ))}
          </GridLayout>
          <Flex>
            <Box
              width={1}
              bg="#b71c1c"
            >
              <Text
                p={3}
                fontSize={[ 3, 4, 5 ]}
                fontWeight='bold'
                fontFamily='roboto'
                color='white'>
                Fruits: { this.state.fruitValue }
              </Text>
            </Box>
          </Flex>
          <GridLayout>
              {FruitData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
                      <input type='button' onClick={
                        this.handleIngredientClick.bind(this, 'add', {card})
                      } value='Have It!' />
                  </Grid>
              ))}
          </GridLayout>
          <Flex>
            <Box
              width={1}
              bg="#f57f17"
            >
              <Text
                p={3}
                fontSize={[ 3, 4, 5 ]}
                fontWeight='bold'
                fontFamily='roboto'
                color='black'>
                Grains: { this.state.grainValue }
              </Text>
            </Box>
          </Flex>
          <GridLayout>
            {GrainData.map((card) => (
              <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                  <IngredientCard data={card}>
                  </IngredientCard>
                  <input type='button' onClick={
                    this.handleIngredientClick.bind(this, 'add', {card})
                  } value='Have It!' />
              </Grid>
            ))}
          </GridLayout>
          <Flex>
            <Box
              width={1}
              bg="#311b92"
            >
              <Text
                p={3}
                fontSize={[ 3, 4, 5 ]}
                fontWeight='bold'
                fontFamily='roboto'
                color='white'>
                Protein: { this.state.proteinValue }
              </Text>
            </Box>
          </Flex>
          <GridLayout>
            {ProteinData.map((card) => (
              <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                  <IngredientCard data={card}>
                  </IngredientCard>
                  <input type='button' onClick={
                    this.handleIngredientClick.bind(this, 'add', {card})
                  } value='Have It!' />
              </Grid>
            ))}
          </GridLayout>
          <Flex>
            <Box
              width={1}
              bg="#0d47a1"
            >
              <Text
                p={3}
                fontSize={[ 3, 4, 5 ]}
                fontWeight='bold'
                fontFamily='roboto'
                color='white'>
                Dairy: { this.state.dairyValue }
              </Text>
            </Box>
          </Flex>
          <GridLayout>
              {DairyData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
                      <input type='button' onClick={
                        this.handleIngredientClick.bind(this, 'add', {card})
                      } value='Have It!' />
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

