exports.contactUs = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
};