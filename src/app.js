import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      selectedCountry: null,
      favouriteCountries: []
    },
    computed: {
      totalPopulation: function() {
        return this.countries.reduce((runningTotal, country) => {
          return runningTotal + country.population;
        },0);
      }
    },
    mounted(){
      this.fetchCountries();
    },
    methods: {
      fetchCountries: function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data)
      },
      addToFavourites: function(selectedCountry){
        this.favouriteCountries.push(selectedCountry)
      }
    }
  });
});
