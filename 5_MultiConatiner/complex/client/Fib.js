import React, {Component} from 'react';
import axios from 'axios';


class Fib extends Component {
    state ={
        seenIndexes: [],
        values:{},
        index:''
    };

    componentDidMount() {
        this.fecthValue();
        this.fecthIndexs();
    }

    async fecthValue(){
        const values = await axios.get('/api/values/current');
        this.setState({values:values.date});
    }

    async fecthIndexs(){
        const indexes = await axios.get('/api/values/all');
        this.setState({ 
            seenIndexes: indexes.data
        });
    }

    handleSubmit = async (event) =>{
        event.preventDefault();
        await axios.post('/api/values', {
            index: this.state.values
        });

        this.setState({
            index: ''
        });

    };

    renderSeenIndexes(){
        return this.state.seenIndexes.map(({number}) => number).join(", ");
    }

    renderValues() {
        const entried = [];

        for (let key in this.state.values){
            entried.push(
                <div key={key}>
                    for index key {key} I Calculated {this.state.values[key]}
                </div>
            )
        }

        return entried;
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your Index:</label>
                    <input 
                    value={this.state.index}
                    onChange={event => this.setState({index: event.target.value})}
                    ></input>
                    <button>Submit</button>
                </form>
                <h3>Index I have seen</h3>
                {this.renderSeenIndexes()}
                <h3>Calculated Value:</h3>
                {this.renderValues()}
            </div>
        );
    }
}

export default Fib;