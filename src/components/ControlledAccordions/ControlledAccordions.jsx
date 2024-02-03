import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className='accordions'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Как сделать заказ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Укажите название предпочитаемого продукта в нашей контактной форме и предоставьте всю необходимую информацию. Наш менеджер свяжется с вами вскоре после проверки наличия товара на складе.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Доставка и отправка</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            На странице продукта вы можете увидеть оценку доставки, например. «в течение 2-3 недель». Отправка — это момент, когда мы отправляем товар нашему партнеру по доставке, а не дата его доставки к вашей двери. Если вам нужны более точные сроки доставки, уточните это у менеджера.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
            Возврат и возмещение
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Если вам не понравится товар, вы можете вернуть его нам в течение 14 дней и получить полный возврат средств. Просто свяжитесь с нами, и мы поможем вам с возвратом. Помните, что вам придется разобрать товар и переупаковать его, чтобы мы могли забрать его и вернуть на склад.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}