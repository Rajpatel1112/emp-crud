using System.ComponentModel.DataAnnotations;

namespace Employeetest.Model
{
    public class Emp
    {
        [Key]
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public long MobileNo { get; set; }
        public string Emailid { get; set; }
    }
}
