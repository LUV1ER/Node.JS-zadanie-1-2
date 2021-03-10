module.exports = function(arr)
{
    let n = arr[0];
    for (i = 0; i < arr.length; i++)
    {
        if (n > arr[i])
        {
            n = arr[i];
        }
    }
    return n;
}
