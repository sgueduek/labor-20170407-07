module.exports = (req, res) => {
    
    //
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('index', {
        title: 'Hello Universe',
        greeting: `Hello Stranger! Es ist ${new Date().toISOString()}`
    });
};