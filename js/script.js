/*
    Website 16 learner
    Mayank All Right Reserved
    JS/script
*/
try
{

    let menu_btn = document.getElementById('menu').onclick = () => alert("bug");

}
catch(error)
{
    console.error("Error : "+error.message());
    alert(error.message());
}