import React from "react";
import { connect } from "react-redux";
import { searchByName, setSelectedTree } from "../../actions/search";
import { Col, Form, Button, Table } from "react-bootstrap";
import htmlParser from 'react-html-parser';
import { Typeahead } from 'react-bootstrap-typeahead';
import "./SearchByName.css";
import uuid from 'react-uuid';

class SearchByName extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedTreeId: null,
      matchFound: false
    }

  }
  // actions passed in as props
  componentDidMount() {
    this.startSearch();
  }

  startSearch = (input) => {
    try {
      if (input) {
        // look for suggestions
        if (input.length > 1) {
          this.setState({ matchFound: false, selectedTreeId: null });
          this.props.searchByName(input);
        }
      } else {
        // calling searchByName with an empty string clears props.suggestions
        return this.props.searchByName();
      }
    } catch (err) {
      console.log(`components.SearchByName.startSearch: ${err}`);
      return;
    }
  }

  selectTree = (e) => {
    try {
      const treeName = e.currentTarget.getAttribute('data-tree-name');
      const treeId = e.currentTarget.getAttribute('data-tree-id');
      this.props.searchByName();
      let searchInputs = document.getElementsByClassName('search-by-name-input');
      // setTimeout is a workaround for the onBlur function of the input
      setTimeout(() => {
        for (let search of searchInputs) {
          // there can be multiple search inputs on a page, all should show the current selection
          let cleanText = treeName.replace(/<\/?[^>]+(>|$)/g, "");
          search.value = htmlParser(cleanText);
          search.setAttribute('data-tree-id', treeId);
        }
      }, 50);
    } catch (err) {
      console.log(`components.SearchByName.selectTree: ${err}`);
    }

  }

  clearSearch = () => {
    try {
      let searchInputs = document.getElementsByClassName('search-by-name-input');
      for (let search of searchInputs) {
        // there can be multiple search inputs on a page, clear all of them
        search.value = "";
        // calling startSearch on an empty input clears the dropdown
        this.startSearch();
      }
    } catch (err) {
      console.log(`components.SearchByName.clearSearch: ${err}`);
    }
  }


  getTreeDetailURL = () => {
    try {
      let treeId = this.state.selectedTreeId;
      if (treeId != null) {
        return (document.location.href = `/tree-detail/${treeId}`);
      }
      return;
    } catch (err) {
      console.log(`components.SearchByName.getTreeDetailUrl: ${err}`);
      return null;
    }

  }

  searchByNameClickHandler = (e) => {
    try {
      let treeId = e.currentTarget.getAttribute('data-tree-id');
      this.setState({ matchFound: true, selectedTreeId: treeId });
      return (document.location.href = `/tree-detail/${treeId}`);
    } catch (err) {
      console.log(`component.SearchByName.searchByNameClickHandler: ${err}`);
    }
  }

  onChangeHandler = (treeData) => {
    try {
      if (treeData[0] && treeData[0].tree_id) {
        this.setState({ selectedTreeId: treeData[0].tree_id, matchFound: true });
      }
    } catch (err) {
      console.log(`component.SearchByName.onChangeHandler: ${err}`);
    }


  }

  searchOnEnter = (e) => {
    try {
      if (e.key === 'Enter') {
        // let userInput = e.target.value;
        if (this.state.matchFound) {
          let treeId = this.state.selectedTreeId;
          return (document.location.href = `/tree-detail/${treeId}`);
        }
      } else {
        return;
      }

    } catch (err) {
      console.log(`component.SearchByName.searchOnEnter: ${err}`);
    }

  }



  getTypeaheadSearch = () => {

    const filterByFields = ['name_concat', 'common', 'family'];
    return (
      <div className="search-by-name-input" onKeyPress={this.searchOnEnter}>
        <Typeahead
          filterBy={filterByFields}
          id='typeahead-search'
          labelKey={(option) => `${htmlParser(option.name_concat.replace(/<\/?[^>]+(>|$)/g, ""))}`
          }
          onInputChange={this.startSearch}
          onClick={this.searchByNameClickHandler}
          onChange={this.onChangeHandler}
          options={this.props.suggestions ? this.props.suggestions : []}
          placeholder="Enter a tree name"
          renderMenuItemChildren={(option) => (
            // TODO - This is where you get to just the primary listing, using taxon.sequence and common.sequence
            <div
              data-tree-id={option.tree_id}
              onClick={this.dropdownClickHandler}
              onFocus={this.dropdownClickHandler}
            >
              <div id={uuid()}>
                <span id={uuid()}>
                  {htmlParser(option.name_concat)}
                </span>
              </div>
              <small>
                <span id={uuid()}>
                  {option.common}
                </span>
              </small>
            </div>
          )}
        />
      </div>
    )
  }

  render() {
    return (
      <div className="search-by-name-container">
        <Form className="form-inline">
          <Form.Group className="row col-12 h-50">
            {this.getTypeaheadSearch()}
            <Button
              variant="success"
              type="button"
              className="search-by-name-submit col-3"
              onClick={this.getTreeDetailURL}
            >
              SEARCH
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

const mapStateToPros = (state) => {
  return { suggestions: state.suggestions.data }
}

export default connect(mapStateToPros, { searchByName, setSelectedTree })(SearchByName);
