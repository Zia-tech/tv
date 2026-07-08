const Tv=require('../model/tv.model');

const createTv = async (req, res) => {
    try {
        const tv = new Tv(req.body);
        await tv.save();
        res.status(201).json({
            success: true,
            message: 'TV created successfully',
            data: tv   ,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating tv',
            data: error,
        });
    }
};

const getAllTvs = async (req, res) => {
    try {
        const tvs = await Tv.find();
        res.status(200).json({
            success: true,
            message: 'Tvs retrieved successfully',
            data: tvs,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error retrieving tvs',
            data: error,
        });
    }
};
const updateTv = async (req, res) => {
    try {
        const tv = await Tv.findByIdAndUpdate(req.params.id ,req.body, {new: true});
        if (!tv) {
            return res.status(404).json({
                success: false,
                message: 'TV not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'TV updated successfully',
            data: tv,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating tv',
            data: error,
        });
    }
};
const deleteTv = async (req, res) => {
    try {
        const tv = await Tv.findByIdAndDelete(req.params.id);
        if (!tv) {
            return res.status(404).json({
                success: false,
                message: 'TV not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'TV deleted successfully',
            data: tv,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error deleting tv',
            data: error,
        });
    }
};
module.exports = {
    createTv,
    getAllTvs,
    updateTv,
    deleteTv
};
