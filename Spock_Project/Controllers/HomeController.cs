using Spock_Project;
using Spock_Project.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Mvc;

namespace Spock_BSDemo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            EmailModel emailModel = new EmailModel();
            return View(emailModel);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Index(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var from = $"{model.FromEmail}<{WebConfigurationManager.AppSettings["emailto"]}>";
                    var email = new MailMessage(from,
                        WebConfigurationManager.AppSettings["emailto"])
                    {
                        Subject = "Portfolio Site Email Message",
                        Body = $"You have an email from {model.FromName}<br/>{model.Body}",
                        IsBodyHtml = true
                    };
                    var svc = new PersonalEmail();
                    await svc.SendAsync(email);
                    ViewBag.SentConfirmationMessage = "Message has been successfully sent.";
                    return View();
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                }
            }
            return View(model);

        }




        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult BSDemo()
        {
            return View();
        }
        public ActionResult JSDemo()
        {
            return View();
        }
        public ActionResult MathExercise()
        {
            return View();
        }
        public ActionResult LoopDemo()
        {
            return View();
        }
        public ActionResult CardModal()
        {
            return View();
        }
        public ActionResult FactorialDemo()
        {

            return View();
        }

        public ActionResult Palindrome()
        {
            return View();
        }

        public ActionResult FizzBuzz()
        {
            return View();

        }
        public ActionResult sumFear()
        {
            return View();
        }


    }






}