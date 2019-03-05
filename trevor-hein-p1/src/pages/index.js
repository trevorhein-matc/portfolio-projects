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
import { Box, Flex, Text } from 'rebass';

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      veggieTallyNum: 0, 
      items: [], 
      text: '',
      veggieValue: 0,
      // selectedOption: "unchecked"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // addVeggie(type) {
  //   this.setState(prevState => {
  //     return (
  //       {veggieValue: type === 'add' ? prevState.veggieValue + 1: prevState.count - 1}
  //     )
  //   });
  // }

  addVeggie() {
    this.setState(prevState => {
      return (
        {veggieValue: prevState.veggieValue + 1}
      )
    });
  }

  addVeggieToList({card}) {
    console.log(card.name);
  }

  addVeggieTypeToList({card}) {
    console.log(card.type);
  }

  handleVeggieCheck = (event, {card}) => {
    this.addVeggieToList({card});
    this.addVeggieTypeToList({card});
    this.addVeggie()
  }

  // handleVeggieCheck = changeEvent => {
  //   this.setState({
  //     selectedOption: changeEvent.target.value
  //   })
  // }

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
                Veggies: {this.state.veggieValue}
              </Text>
            </Box>
          </Flex>
          <GridLayout>
              {VeggieData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
                      <input type='button' onClick={
                        this.handleVeggieCheck.bind(this, 'add', {card})
                        // this.veggieWrapper.bind(this, 'add', {card})
                        // this.addVeggie.bind(this, 'add', {card})
                        // this.addVeggieToList.bind(this, {card})
                      } value='Have It!' />

                      {/* <label>
                        <input
                          type="radio"
                          name="veggieCheck"
                          value="unchecked"
                          checked={this.state.selectedOption === "unchecked"}
                          onChange={this.handleVeggieCheck}
                          className="ingredientCheckBox"
                        />
                        Have {card.name}
                      </label> */}
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
                Fruits
              </Text>
            </Box>
          </Flex>
          <GridLayout>
              {FruitData.map((card) => (
                  <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                      <IngredientCard data={card}>
                      </IngredientCard>
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
                Grains
              </Text>
            </Box>
          </Flex>
          <GridLayout>
            {GrainData.map((card) => (
              <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                  <IngredientCard data={card}>
                  </IngredientCard>
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
                Protein
              </Text>
            </Box>
          </Flex>
          <GridLayout>
            {ProteinData.map((card) => (
              <Grid item xs={3} sm={2} md={1} key={card.name} data={card}>
                  <IngredientCard data={card}>
                  </IngredientCard>
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
                Dairy
              </Text>
            </Box>
          </Flex>
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

