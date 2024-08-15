using Employeetest.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Employeetest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpController : ControllerBase
    {
        private readonly EmpDbContext _dbEmpDb = new EmpDbContext();

        [HttpGet("getEmpById/{paramId}")]
        public async Task<Emp> GetEmpbyId(int paramId)
        {
            return await _dbEmpDb.tblEmp.FirstOrDefaultAsync(x => x.ID == paramId);
        }

        [HttpGet("getEmpList")]
        public async Task<List<Emp>> GetEmpList()
        {
            return await _dbEmpDb.tblEmp.ToListAsync();
        }


        [HttpPost("saveEmp")]
        public async Task<int> SaveEmployee(Emp emp)
        {
            if (emp.ID > 0)
            {
                Emp _objEmployee = await _dbEmpDb.tblEmp.FirstOrDefaultAsync(x => x.ID == emp.ID);
                if (_objEmployee != null)
                {
                    _objEmployee.Name = emp.Name;
                    _objEmployee.Address = emp.Address;
                    _objEmployee.MobileNo = emp.MobileNo;
                    _objEmployee.Emailid = emp.Emailid;
                    _dbEmpDb.Update(_objEmployee);
                }
            }
            else
            {
                await _dbEmpDb.tblEmp.AddAsync(emp);
            }
            await _dbEmpDb.SaveChangesAsync();
            return emp.ID;
        }
        [HttpPost("deleteEmp/{paramid}")]
        public async Task<bool> DeleteEmployee(int paramid)
        {
            bool _isDelete = false;
            Emp _objEmployee = await _dbEmpDb.tblEmp.FirstOrDefaultAsync(x => x.ID == paramid);
            if (_objEmployee != null)
            {
                _dbEmpDb.tblEmp.Remove(_objEmployee);
                await _dbEmpDb.SaveChangesAsync();
                _isDelete = true;
            }
            return _isDelete;
        }

    }
}
