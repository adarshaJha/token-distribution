module.exports = {
  networks: {
    localhost: {
      host: "localhost", 
      port: 8545,
      gasPrice: 50000000000,
      network_id: "*" 
    },  
    live: {
      network_id: 1,
      host: 'localhost',
      port: 8545
    },
    ropsten: {
      host: "localhost",
      port: 8546,
      network_id: "3",
      gas: 4612388,
      gasPrice: 110000000000
    }
  },
  solc: {
      optimizer: {
	  enabled: false,
	  runs: 0
      }
  }
};
