select emp_id, avg(salary) as avg_sal
from employees
group by emp_id
having avg(salary) > 30000