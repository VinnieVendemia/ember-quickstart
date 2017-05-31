import Ember from 'ember';

export default Ember.Route.extend({
  // This method supports any library that uses javascript promises 
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
});
