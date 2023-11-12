const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  
    try{
      const categoryData = await Category.findAll({
        include: [Product],
       });
      res.status(201).json({status: ('success'), categoryData})
     } catch (err){
      res.status(501).json({status: ('error'), categoryData: err.message})
  
     }
}
);

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findByPk(req.params.id, {
      include: [Product],
    });
    res.status(201).json({status: ('success'), categoryData})
   } catch (err){
    res.status(501).json({status: ('error'), categoryData: err.message})

   }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const categoryData = await Category.create(req.body);
    res.status(201).json({status: ('success'), categoryData})
   } catch (err){
    res.status(501).json({status: ('error'), categoryData: err.message})

   }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const categoryData = await Category.update(
       req.body, {
         where: {
          id: req.params.id
         }
       }
    );
    res.status(201).json({status: ('success'), categoryData})
   } catch (err){
    res.status(401).json({status: ('error'), categoryData: err.message})

   }
});

router.delete('/:id', async (req, res) => {
  try{
    const categoryData = await Category.destroy({
       where: {
           id:req.params.id

       }
   });
    res.status(201).json({status: ('success'), categoryData})
   } catch (err){
    res.status(501).json({status: ('error'), categoryData: err.message})

   }});

module.exports = router;


