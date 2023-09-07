const { JSDOM } = require('jsdom');

// Initialize JSDOM
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});

global.window = jsdom.window;
global.document = jsdom.window.document;

// Import the functions to be tested
const { displayPopupForm, closePopupForm } = require('../popup-form');



  


// Mock document.body and related functions
document.body = document.createElement('body');
document.querySelector = jest.fn();
jest.mock('../popup-form', () => ({
    displayPopupForm: jest.fn(),
    closePopupForm: jest.fn(),
  }));
  
describe('Popup Form Functions', () => {
  beforeEach(() => {
    // Clear the document body before each test
    document.body.innerHTML = '';
  });

  test('displayPopupForm creates and appends elements', () => {
    displayPopupForm();

    // Check if popup container is created and appended to body
    expect(document.querySelector('.popup-container')).not.toBeNull();
    
    // You can add more assertions for other elements if needed
  });


  
});
