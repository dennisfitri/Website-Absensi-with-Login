const Rekap = require('../models/rekapModels');

const rekapController = {};
rekapController.getAllRekap = async (req, res) => {
    try {
      const rekap = await Rekap.getAllRekap();
      res.render('rekap', {rekap});
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
};

module.exports = rekapController;