import React from 'react';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';
import '../styles/Table.css';
import Image from '../dot_PNG22.png'

class Search extends React.Component {
  state = { employees: [], search: '' };

  componentDidMount() {
    API.employeeSearch()
      .then((res) => {

        console.log(res);

        //Setting State
        this.setState({
          employees: res.data.results.map((event, i) => ({
            firstName: event.name.first,
            lastName: event.name.last,
            picture: event.picture.large,
            email: event.email,
            phone: event.phone,
            city: event.location.city,
            key: i,
          })),
          
        });

      })
      .catch((err) => console.log(err));
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchEmployee = (filter) => {
    console.log('Search', filter);
    const filteredList = this.state.employees.filter((employee) => {
      // merge data together, then check to see if employee exists
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    // Update the employee list with the filtered value
    this.setState({ employees: filteredList });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log('Handling ', this.state.search);
    this.searchEmployee(this.state.search);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Button Clicked', this.state.search, event);
    this.searchEmployee(this.state.search);
  };

  sortName(){
    console.log(this.state.employees)

    let viewArr = this.state.employees
    viewArr.sort((a, b) => {
      let fa = a.firstName.toLowerCase(),
          fb = b.firstName.toLowerCase();
  
      if (fa < fb) {
          return -1;
      }
      if (fa > fb) {
          return 1;
      }
      return 0;
  });
  this.setState({employees: viewArr})
  }

  handleBtnClick = (event) => {
    const btnName = event.target.getAttribute("data-value");
    switch (btnName) {
      case "name":
        this.sortName()
          break;  
        default:
        return null
    }
  }

  render() {
    return (
      
        <div className="container">
          <div className="row">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
          </div>

          <div className="row">
              <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                  <th>First Name <img className="caret" onClick={this.handleBtnClick} data-value="name" src={Image} alt="acsend-decend"></img></th>
                    <th>Last Name </th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                  </tr>
                </thead>
                {[...this.state.employees].map((item) => (
                  <Card
                    picture={item.picture}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    city={item.city}
                    key={item.key}
                  />
                ))}
              </table>
            
          </div>
        </div>
      
    );
  }
}

export default Search;