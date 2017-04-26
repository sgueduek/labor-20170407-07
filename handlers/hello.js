module.exports = (req, res) => {
    
    //
    // Rendern des `index` Templates
    // Übergabe der Daten, die in das Template gerendert werden.
    //
    res.render('index', {
        title: 'STRANGER THINGS',
        greeting: `Stranger Things! Es ist ${new Date().toISOString()}`
    });
};