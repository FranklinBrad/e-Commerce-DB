const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tagsData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
     });
    res.status(201).json({status: ('success'), tagsData})
   } catch (err){
    res.status(501).json({status: ('error'), tagsData: err.message})

   }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagsData = await Tag.findAll(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(201).json({status: ('success'), tagsData})
   } catch (err){
    res.status(501).json({status: ('error'), tagsData: err.message})

   }
});

router.post('/',  async (req, res) => {
  // create a new tag
  try{
    const tagsData = await Tag.create(req.body);
    res.status(201).json({status: ('success'), tagsData})
   } catch (err){
    res.status(501).json({status: ('error'), tagsData: err.message})

   }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const tagsData = await Tag.update(
       req.body, {
         where: {
          id: req.params.id
         }
       }
    );
    res.status(201).json({status: ('success'), tagsData})
   } catch (err){
    res.status(401).json({status: ('error'), tagsData: err.message})

   }
});

router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  try{
    const tagsData = await Tag.destroy({
       where: {
           id:req.params.id

       }
   });
    res.status(201).json({status: ('success'), tagsData})
   } catch (err){
    res.status(501).json({status: ('error'), tagsData: err.message})

   }
});

module.exports = router;
