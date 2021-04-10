import React from 'react';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import API from '../utils/API';
import '../styles/Table.css';

class Search extends React.Component {
  state = { employees: [], search: '' };

  componentDidMount() {
    API.employeeSearch()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            city: e.location.city,
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

  handleInputChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('Handling ', this.state.search);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Button Clicked', this.state.search, e);
    this.searchEmployee(this.state.search);
  };

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
                    <th>First Name</th>
                    <th>Last Name</th>
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