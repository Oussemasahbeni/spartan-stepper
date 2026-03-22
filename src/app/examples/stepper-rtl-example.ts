import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonImports } from '../libs/button/src';
import { HlmStepperImports } from '../stepper';

@Component({
  selector: 'docs-stepper-rtl-example',
  imports: [HlmStepperImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div dir="rtl" lang="ar" class="space-y-8">
      <section class="space-y-3">
        <h4 class="text-sm font-semibold text-foreground">أفقي</h4>
        <hlm-stepper>
          <hlm-step label="الحساب">
            <div class="flex flex-col gap-4">
              <div
                class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
              >
                المحتوى ١
              </div>
              <div class="flex justify-end">
                <button hlmBtn hlmStepperNext>التالي</button>
              </div>
            </div>
          </hlm-step>

          <hlm-step label="العنوان">
            <div class="flex flex-col gap-4">
              <div
                class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
              >
                المحتوى ٢
              </div>
              <div class="flex justify-between gap-2">
                <button hlmBtn variant="outline" hlmStepperPrevious>السابق</button>
                <button hlmBtn hlmStepperNext>التالي</button>
              </div>
            </div>
          </hlm-step>

          <hlm-step label="المراجعة">
            <div class="flex flex-col gap-4">
              <div
                class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
              >
                المحتوى ٣
              </div>
              <div class="flex justify-between gap-2">
                <button hlmBtn variant="outline" hlmStepperPrevious>السابق</button>
                <button hlmBtn>إنهاء</button>
              </div>
            </div>
          </hlm-step>
        </hlm-stepper>
      </section>

      <section class="space-y-3">
        <h4 class="text-sm font-semibold text-foreground">عمودي</h4>
        <hlm-stepper orientation="vertical">
          <hlm-step label="المرحلة الأولى">
            <div class="flex flex-col gap-4">
              <div
                class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
              >
                هذا مثال للعرض العمودي من اليمين إلى اليسار.
              </div>
              <div class="flex justify-start">
                <button hlmBtn hlmStepperNext>التالي</button>
              </div>
            </div>
          </hlm-step>

          <hlm-step label="المرحلة الثانية">
            <div class="flex flex-col gap-4">
              <div
                class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
              >
                يمكن استخدام نفس واجهة الخطوات مع اتجاه RTL.
              </div>
              <div class="flex justify-between gap-2">
                <button hlmBtn variant="outline" hlmStepperPrevious>السابق</button>
                <button hlmBtn hlmStepperNext>التالي</button>
              </div>
            </div>
          </hlm-step>

          <hlm-step label="المرحلة الأخيرة">
            <div class="flex flex-col gap-4">
              <div
                class="flex h-48 items-center justify-center rounded-lg border-2 border-dashed font-medium text-lg text-muted-foreground"
              >
                جاهز للإرسال.
              </div>
              <div class="flex justify-between gap-2">
                <button hlmBtn variant="outline" hlmStepperPrevious>السابق</button>
                <button hlmBtn>إنهاء</button>
              </div>
            </div>
          </hlm-step>
        </hlm-stepper>
      </section>
    </div>
  `,
})
export class StepperRtlExampleComponent {}
